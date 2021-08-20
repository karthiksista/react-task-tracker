import React from "react";
import SkeletonElement from "./SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonArticle = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <div className="group-card-container">
          <SkeletonElement type="group-card" />
          <SkeletonElement type="group-card" />
          <SkeletonElement type="group-card" />
        </div>
        <div className="second-container">
          <div className="container-1">
            <SkeletonElement type="title" />
          </div>
          <div className="container-2">
            <SkeletonElement type="searchbar" />
            <SkeletonElement type="title" />
          </div>
        </div>
        <div>
          <SkeletonElement type="table" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
