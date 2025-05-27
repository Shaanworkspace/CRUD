package com.crud.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class health {
    @GetMapping("/ok")
    public String healthOK(){
        return "All Ok ";
    }
}
