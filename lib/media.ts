import type { StaticImageData } from 'next/image'

import accountMainOld from '@/src/images/Mobile-AccountMainOld.png'
import accountMembershipOld from '@/src/images/Mobile-MembershipOld.png'
import accountRewardsOld from '@/src/images/Mobile-RewardsOld.png'
import account from '@/src/images/Mobile-Account.png'
import armoireMock from '@/src/images/armoire-mock.png'
import caseOld from '@/src/images/Mobile-CaseOld.png'
import casePurchaseOld from '@/src/images/Mobile-PurchaseOld.png'
import caseReviewOld from '@/src/images/Mobile-ReviewsOld.png'
import caseScreen from '@/src/images/Mobile-Case.png'
import closetFilters from '@/src/images/Mobile-Filters.png'
import closetHomeOld from '@/src/images/Mobile-ClosetHomeOld.png'
import closetPdpOld from '@/src/images/Mobile-PdpOld.png'
import closetSectionOld from '@/src/images/Mobile-ClosetSectionOld.png'
import closetSection from '@/src/images/Mobile-ClosetSection.png'
import feedCommentOld from '@/src/images/Mobile-FeedCommentOld.png'
import feedOld from '@/src/images/Mobile-PWRFeedOld.png'
import feedProfileOld from '@/src/images/Mobile-FeedProfileOld.png'
import feed from '@/src/images/Mobile-Feed.png'
import feedProfile from '@/src/images/Mobile-EditProfile.png'
import navigationArchitecture1 from '@/src/images/Mobile-NavArch1.png'
import navigationArchitecture2 from '@/src/images/Mobile-NavArch2.png'
import navigationArchitecture3 from '@/src/images/Mobile-NavArch3.png'
import navigationArchitectureFinal from '@/src/images/Mobile-NavArchFinal.png'
import navigationDeeplinks from '@/src/images/Mobile-NavDeeplinks.png'
import navigationOldDesktop from '@/src/images/Mobile-WebNavOldDesktopCondensed.png'
import navigationOldFlyout from '@/src/images/Mobile-WebNavOldFlyout.png'
import navigationOldMobile from '@/src/images/Mobile-WebNavOldMobile.png'
import notificationsOld from '@/src/images/Mobile-NotificationsOld.png'
import notificationsOld2 from '@/src/images/Mobile-NotificationsOld1.png'
import notifications from '@/src/images/Mobile-Notification.png'
import pocPDP from '@/src/images/Mobile-POCPDP.png'
import profile from '@/src/images/MeganWoodruff.jpeg'
import searchOld from '@/src/images/Mobile-SearchOld.png'
import searchResultsOld from '@/src/images/Mobile-SearchResultsOld.png'
import search from '@/src/images/Mobile-SearchResults.png'
import technicalArchitecture from '@/src/images/Mobile-TechnicalArchitectureTransparent.png'
import webview2 from '@/src/images/Mobile-Webview2.png'
import welcome from '@/src/images/Mobile-Welcome.png'

export const images = {
  account,
  accountMainOld,
  accountMembershipOld,
  accountRewardsOld,
  armoireMock,
  caseOld,
  casePurchaseOld,
  caseReviewOld,
  caseScreen,
  closetFilters,
  closetHomeOld,
  closetPdpOld,
  closetSection,
  closetSectionOld,
  feed,
  feedCommentOld,
  feedOld,
  feedProfile,
  feedProfileOld,
  navigationArchitecture1,
  navigationArchitecture2,
  navigationArchitecture3,
  navigationArchitectureFinal,
  navigationDeeplinks,
  navigationOldDesktop,
  navigationOldFlyout,
  navigationOldMobile,
  notifications,
  notificationsOld,
  notificationsOld2,
  pocPDP,
  profile,
  search,
  searchOld,
  searchResultsOld,
  technicalArchitecture,
  webview2,
  welcome,
} satisfies Record<string, StaticImageData>

const defaultMediaBase =
  'https://raw.githubusercontent.com/megan-woodruff/portfolio/77947115fb8b72a14a9ced8dd4066fc193219df8/src/images'

export function videoUrl(filename: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/$/, '') ??
    defaultMediaBase

  return `${baseUrl}/${encodeURIComponent(filename)}`
}
