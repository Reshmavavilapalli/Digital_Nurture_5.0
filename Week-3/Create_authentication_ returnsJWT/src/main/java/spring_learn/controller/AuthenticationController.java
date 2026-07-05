package spring_learn.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import spring_learn.util.JwtUtil;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(Principal principal) {

        // Spring automatically extracts username from -u user:pwd
        String username = principal.getName();

        // Generate JWT token
        String token = JwtUtil.generateToken(username);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        return response;
    }
}