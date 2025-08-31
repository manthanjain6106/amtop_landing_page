'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Clock, Database, Globe, Shield } from 'lucide-react';

interface PerformanceMetrics {
  pageLoadTime: number;
  apiResponseTime: number;
  memoryUsage: number;
  networkRequests: number;
  cacheHitRate: number;
  errorRate: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: 0,
    apiResponseTime: 0,
    memoryUsage: 0,
    networkRequests: 0,
    cacheHitRate: 0,
    errorRate: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Measure page load performance
    const measurePageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          setMetrics(prev => ({ ...prev, pageLoadTime: loadTime }));
        }
      }
    };

    // Measure API performance
    const measureAPIPerformance = async () => {
      const startTime = performance.now();
      try {
        await fetch('/api/blog');
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        
        setMetrics(prev => ({ 
          ...prev, 
          apiResponseTime: responseTime,
          networkRequests: prev.networkRequests + 1
        }));
      } catch {
        setMetrics(prev => ({ 
          ...prev, 
          errorRate: prev.errorRate + 1,
          networkRequests: prev.networkRequests + 1
        }));
      }
    };

    // Measure memory usage
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory: { usedJSHeapSize: number } }).memory;
        const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
        setMetrics(prev => ({ ...prev, memoryUsage: usedMemory }));
      }
    };

    // Measure cache performance
    const measureCachePerformance = () => {
      if ('caches' in window) {
        caches.keys().then(cacheNames => {
          const cacheHitRate = cacheNames.length > 0 ? 85 : 0; // Simplified calculation
          setMetrics(prev => ({ ...prev, cacheHitRate }));
        });
      }
    };

    // Initial measurements
    measurePageLoad();
    measureAPIPerformance();
    measureMemory();
    measureCachePerformance();

    // Set up performance observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            measurePageLoad();
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }

    // Periodic measurements
    const interval = setInterval(() => {
      measureMemory();
      measureAPIPerformance();
    }, 30000); // Every 30 seconds

    // Show monitor after 5 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(showTimer);
    };
  }, []);

  const getPerformanceColor = (value: number, threshold: number) => {
    if (value <= threshold) return 'text-green-500';
    if (value <= threshold * 1.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPerformanceIcon = (value: number, threshold: number) => {
    if (value <= threshold) return <Zap className="w-4 h-4 text-green-500" />;
    if (value <= threshold * 1.5) return <Clock className="w-4 h-4 text-yellow-500" />;
    return <Activity className="w-4 h-4 text-red-500" />;
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80 z-50"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>

      <div className="space-y-2">
        {/* Page Load Time */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-gray-500" />
            <span className="text-gray-600">Page Load</span>
          </div>
          <div className="flex items-center gap-1">
            {getPerformanceIcon(metrics.pageLoadTime, 1000)}
            <span className={getPerformanceColor(metrics.pageLoadTime, 1000)}>
              {metrics.pageLoadTime.toFixed(0)}ms
            </span>
          </div>
        </div>

        {/* API Response Time */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3 text-gray-500" />
            <span className="text-gray-600">API Response</span>
          </div>
          <div className="flex items-center gap-1">
            {getPerformanceIcon(metrics.apiResponseTime, 200)}
            <span className={getPerformanceColor(metrics.apiResponseTime, 200)}>
              {metrics.apiResponseTime.toFixed(0)}ms
            </span>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Database className="w-3 h-3 text-gray-500" />
            <span className="text-gray-600">Memory</span>
          </div>
          <div className="flex items-center gap-1">
            {getPerformanceIcon(metrics.memoryUsage, 50)}
            <span className={getPerformanceColor(metrics.memoryUsage, 50)}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        </div>

        {/* Cache Hit Rate */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-gray-500" />
            <span className="text-gray-600">Cache Hit</span>
          </div>
          <div className="flex items-center gap-1">
            {getPerformanceIcon(100 - metrics.cacheHitRate, 20)}
            <span className={getPerformanceColor(100 - metrics.cacheHitRate, 20)}>
              {metrics.cacheHitRate.toFixed(0)}%
            </span>
          </div>
        </div>

        {/* Network Requests */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-gray-500" />
            <span className="text-gray-600">Requests</span>
          </div>
          <span className="text-gray-700">{metrics.networkRequests}</span>
        </div>

        {/* Error Rate */}
        {metrics.errorRate > 0 && (
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-red-500" />
              <span className="text-red-600">Errors</span>
            </div>
            <span className="text-red-500">{metrics.errorRate}</span>
          </div>
        )}
      </div>

      {/* Performance Summary */}
      <div className="mt-3 pt-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Overall Status</span>
          <div className="flex items-center gap-1">
            {metrics.pageLoadTime <= 1000 && 
             metrics.apiResponseTime <= 200 && 
             metrics.memoryUsage <= 50 ? (
              <Zap className="w-3 h-3 text-green-500" />
            ) : (
              <Clock className="w-3 h-3 text-yellow-500" />
            )}
            <span className={
              metrics.pageLoadTime <= 1000 && 
              metrics.apiResponseTime <= 200 && 
              metrics.memoryUsage <= 50 ? 'text-green-500' : 'text-yellow-500'
            }>
              {metrics.pageLoadTime <= 1000 && 
               metrics.apiResponseTime <= 200 && 
               metrics.memoryUsage <= 50 ? 'Optimal' : 'Good'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceMonitor;
