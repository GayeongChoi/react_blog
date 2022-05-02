import React from "react";
import "./post.css";

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <img src="https://source.unsplash.com/800x580/?blog,water" alt="dd" />
            </figure>
            <div className="post__body">
                <span className="post__cate">javascript</span>
                <div className="post__title">포스트 제목</div>
                <div className="post__desc">
                    시멘틱태그를 사용하면 좋은점(장점) 1. SEO 최적화에 유리. (SEO: Search Engine Optimization) 검색
                    엔진이 태그의 목적에 부합하게 설계되어있는 구조의 사이트에서 더욱 빨리 효율적으로 정보를 파악할 수
                    있어 검색 결과의 노출에 유리할 수 있게 해준다. 2. 웹 접근성에 효율적 일반적인 브라우저에서는 차이가
                    없지만 스크린리더(시각장애인을 위한 웹 서핑 프로그램)과 같은 환경에서는 웹 접근성과 사용성을
                    향상시켜준다. 3. 유지보수의 용이성 많으 div사용으로 관리가 어려워지는 문제점에서 벗어나 태그의
                    이름만 보고도 어떤 영역인지 바로 확인이 가능하며 해당 태그 영역의 특성에 맞는 작업을 구분하여
                    진행하기에 용이하다.
                </div>
                <div className="post__info">
                    <span className="author">최가영</span>
                    <span className="date">2022-04-03</span>
                </div>
            </div>
        </article>
    );
}
