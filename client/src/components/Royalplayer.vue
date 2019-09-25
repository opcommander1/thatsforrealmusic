<template>
<div class="Royalplayer">
   <div class="row">
      <div class="col s12 m12">
        <ul id="playlist1" style="display:none;">
            <li data-path="content/mp3/groove.wav"  data-downloadable="no" data-duration="03:15">
            <p><span style="font-weight:bold;">GROOVE</span></p>
          </li>
          <li data-path="content/mp3/Gobble.mp3"  data-downloadable="no" data-duration="03:09">
              <p><span style="font-weight:bold;">GOBBLE SPIT WORSHIP - </span>FREE BEAT WITH SIGNUP</p>
          </li>
          <li data-path="content/mp3/HeComingStayCalm.wav"  data-downloadable="no" data-duration="03:36">
              <p><span style="font-weight:bold;">HE COMING STAY CALM</span></p>
          </li>
          <li data-path="content/mp3/RhodesHeaven.wav"  data-downloadable="no" data-duration="02:52">
              <p><span style="font-weight:bold;">RHODES HEAVEN</span></p>
          </li>
      </ul>
      <div  v-bind:id="id" class="col m12 s12">
         <ul id="playlists" style="display:none;">
          <li data-source="playlist1" data-thumbnail-path="content/thumbnails/large1.jpg">
          <p class="minimalDarkCategoriesTitle"><span class="bold">Title: </span>My playlist 1</p>
          <p class="minimalDarkCategoriesType"><span class="bold">Type: </span><span class="minimalDarkCategoriesTypeIn">HTML</span></p>
          <p class="minimalDarkCategoriesDescription"><span class="bold">Description: </span>This playlist is created using html elements.</p>
         </li>
        </ul>
      </div>
      </div>
      <div class="row">
        <!--If the counter greater and equal to 2, button will not 
        appear after page reload
        -->
        <div v-if="showButton == true && counter < 2"  class="col s12 m12 center">
          <button class="waves-effect waves-light btn-large" @click="royalplayer">Click for Royal Audio Player</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Royalplayer',
  data(){
    return {
      id: 'myDiv',
      counter: localStorage.getItem('logincounter'),
      showButton: true
    }
  },
  methods: {
    royalplayer() {
      //add 1 to local storage when show royalplayer button is click
      let logincounter = 0
      logincounter = localStorage.getItem('logincounter')
      logincounter++
      this.counter = logincounter
      localStorage.setItem('logincounter', logincounter)

      //if local storage logincounter is less than 3 royal player 
      //will appear and show button will disappear
      if (this.$store.state.isUserLoggedIn == true && logincounter < 3) {
        this.showButton = localStorage.getItem('showButton')
        window.location.reload('true')
      }

    },
    sButton(){
      //Check to see if user is logged in, if not, the royalplayer
      //button won't display
      if (this.$store.state.isUserLoggedIn == false){
        this.showButton = false
      }
    }
  },
  created(){
    //Initiate royal player
    this.sButton()
    if(this.id="myDiv"){
      FWDRAPUtils.onReady(function(){
          new FWDRAP({
              //main settings
              instanceName:"player1",
              parentId:"myDiv",
              playlistsId:"playlists",
              mainFolderPath:"content",
              skinPath:"modern_skin_dark",
              showSoundCloudUserNameInTitle:"yes",
              googleAnalyticsTrackingCode:"",
              useDeepLinking:"no",
              useYoutube:"yes",
              useVideo:"yes",
              rightClickContextMenu:"default",
              showButtonsToolTips:"yes",
              initializeOnlyWhenVisible:"no",
              autoPlay:"no",
              loop:"no",
              shuffle:"no",
              useHEXColorsForSkin:"yes",
              addKeyboardSupport:"yes",
              privatePassword:"428c841430ea18a70f7b06525d4b748a",
              soundCloudAPIKey:"0aff03b3b79c2ac02fd2283b300735bd",
              normalHEXButtonsColor:"#ce93d8",
              selectedHEXButtonsColor:"#9dd893",
              maxWidth:801,
              volume:.8,
              toolTipsButtonsHideDelay:1.5,
              toolTipsButtonFontColor:"#5a5a5a",
              //controller settings
              animateOnIntro:"yes",
              showNextAndPrevButtons:"yes",
              showFullScreenButton:"yes",
              showThumbnail:"yes",
              showSoundAnimation:"yes",
              showLoopButton:"yes",
              showShuffleButton:"yes",
              showDownloadMp3Button:"yes",
              showBuyButton:"no",
              showShareButton:"no",
              disableAudioScrubbar:"no",
              expandBackground:"no",
              titleColor:"#ce93d8",
              timeColor:"#ce93d8",
              //controller align and size settings (described in detail in the documentation!)
              controllerHeight:76,
              startSpaceBetweenButtons:9,
              spaceBetweenButtons:8,
              separatorOffsetOutSpace:5,
              separatorOffsetInSpace:9,
              lastButtonsOffsetTop:14,
              allButtonsOffsetTopAndBottom:14,
              titleBarOffsetTop:13,
              mainScrubberOffsetTop:47,
              spaceBetweenMainScrubberAndTime:10,
              startTimeSpace:10,
              scrubbersOffsetWidth:2,
              scrubbersOffestTotalWidth:0,
              volumeButtonAndScrubberOffsetTop:47,
              spaceBetweenVolumeButtonAndScrubber:6,
              volumeScrubberOffestWidth:4,
              scrubberOffsetBottom:10,
              equlizerOffsetLeft:1,
              //playlists window settings+
              showPlaylistsSearchInput:"no",
              usePlaylistsSelectBox:"no",
              showPlaylistsSelectBoxNumbers:"yes",
              showPlaylistsButtonAndPlaylists:"no",
              showPlaylistsByDefault:"no",
              randomizePlaylist:"no",
              thumbnailSelectedType:"opacity",
              startAtPlaylist:0,
              startAtTrack:0,
              startAtRandomTrack:"no",
              buttonsMargins:0,
              thumbnailMaxWidth:350, 
              thumbnailMaxHeight:350,
              horizontalSpaceBetweenThumbnails:40,
              verticalSpaceBetweenThumbnails:40,
              mainSelectorBackgroundSelectedColor:"#FFFFFF",
              mainSelectorTextNormalColor:"#ce93d8",
              mainSelectorTextSelectedColor:"#000000",
              mainButtonTextNormalColor:"#ce93d8",
              mainButtonTextSelectedColor:"#FFFFFF",
              //playlist settings
              playTrackAfterPlaylistLoad:"no",
              showPlayListButtonAndPlaylist:"yes",
              showPlayListOnAndroid:"yes",
              showPlayListByDefault:"yes",
              showPlaylistItemPlayButton:"yes",
              showPlaylistItemDownloadButton:"yes",
              showPlaylistItemBuyButton:"yes",
              forceDisableDownloadButtonForPodcast:"yes",
              forceDisableDownloadButtonForOfficialFM:"yes",
              forceDisableDownloadButtonForFolder:"yes",
              addScrollBarMouseWheelSupport:"yes",
              showTracksNumbers:"yes",
              playlistBackgroundColor:"#000000",
              trackTitleNormalColor:"#ce93d8",
              trackTitleSelectedColor:"#FFFFFF",
              trackDurationColor:"#ce93d8",
              maxPlaylistItems:100,
              nrOfVisiblePlaylistItems:12,
              trackTitleOffsetLeft:0,
              playPauseButtonOffsetLeftAndRight:11,
              durationOffsetRight:9,
              downloadButtonOffsetRight:11,
              scrollbarOffestWidth:7,
              //loggin
              isLoggedIn:"yes",
              playTrackOnlyWhenLoggedIn:"yes",
              loggedInMessage:"Please login to play this track.",
              //playback rate / speed
              showPlaybackRateButton:"yes",
              defaultPlaybackRate:1, //min - 0.5 / max - 3
              playbackRateWindowTextColor:"#ce93d8",
              //password window
              borderColor:"#ce93d8",
              secondaryLabelsColor:"#a1a1a1",
              textColor:"#ce93d8",
              inputBackgroundColor:"#ce93d8",
              inputColor:"#FFFFFF",
              //search bar settings
              showSearchBar:"yes",
              showSortButtons:"yes",
              searchInputColor:"#999999",
              searchBarHeight:38,
              inputSearchTextOffsetTop:1,
              inputSearchOffsetLeft:0,
              //popup settings
              showPopupButton:"yes",
              popupWindowBackgroundColor:"#878787",
              popupWindowWidth:750,
              popupWindowHeight:423
          })
      })}
  },
}
</script>

<style>

</style>


