package com.crud.Service;
import com.crud.Entity.User;
import com.crud.Repo.UserRepository;

import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;
import java.util.Optional;

@Service

public class UserService {


    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    private User user;
    public User createUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        return userRepository.save(user);
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }


    public User updateUser(Long id, User inputUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));

        if (!user.getEmail().equals(inputUser.getEmail()) && userRepository.existsByEmail(inputUser.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }

        user.setName(inputUser.getName());
        user.setEmail(inputUser.getEmail());
        user.setAddress(inputUser.getAddress());
        user.setNumber(inputUser.getNumber());
        return userRepository.save(user);
    }


    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new IllegalArgumentException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
}