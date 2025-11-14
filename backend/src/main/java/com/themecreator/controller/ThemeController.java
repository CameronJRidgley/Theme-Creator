package com.themecreator.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ThemeController {
    
    @GetMapping("/")
    public Map<String, String> root() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Welcome to Theme Creator API");
        return response;
    }
    
    @GetMapping("/api/health")
    public Map<String, String> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "healthy");
        return response;
    }
    
    @GetMapping("/api/theme")
    public Map<String, String> getTheme() {
        Map<String, String> response = new HashMap<>();
        response.put("theme", "placeholder");
        response.put("message", "Theme generation endpoint - coming soon");
        return response;
    }
}
