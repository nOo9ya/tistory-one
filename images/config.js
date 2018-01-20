;(function($) {
    /**
     * logo 이미지 노출 여부
     *
     * $.config.logo( true/false , "블로그제목 ID(#) 또는 클래스(.)", "프로필 이미지 ID(#) 또는 클래스(.)" );
     * 예 : $.config.logo(true, "#blogTitle", "#profileImg");
     *
     * 첫번째 인자인 true/false를 넣지 않으면 false가 자동으로 입력됩니다.
     * 뒤의 블로그제목과 프로필 이미지의 대상을 지정안하면 기본값이 들어갑니다.
     */
    $.config.logo(true);

    /**
     * 블로그 소유자로 로그인한 경우에만 "관리자"라는 하단 링크가 노출됩니다.
     * 모두에게 노출하길 원한다면 $.config.adminLink()를 주석처리 하시면 됩니다.
     * 기본 대상은 #footerAdmin 입니다.
     * 주석 처리 예 : //$.config.adminLink();
     *
     * 관리자 링크가 여러개면 아래예시와 같이 추가로 넣으시면 됩니다.
     * 상단, 사이드바, 하단 관리자 링크가 있다면 소유자를 제외한 손님은 안보이게 하기 예 :
     * $.config.adminLink("#footerAdmin, #headerAdmin, #sidebarAdmin", true);
     * 두번째 인자인 true는 안넣으시면 기본적으로 작동하며, 모두에게 공개하고 싶으시면 false 값을 넣으시면 됩니다.
     */
    $.config.adminLink("#footerAdmin", true);

})(jQuery);