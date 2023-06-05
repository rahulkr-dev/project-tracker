import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import CreateProject from "../pages/CreateProject";
import ProjectListing from "../pages/ProjectListing";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-project"
        element={
          <PrivateRoute>
            <CreateProject />
          </PrivateRoute>
        }
      />
      <Route
        path="/project-list"
        element={
          <PrivateRoute>
            <ProjectListing />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
