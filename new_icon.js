function displayIcon(rowData, userLCID)
{
	// 行情報からJSONパース
	var oppRowData = JSON.parse(rowData);
	
	// 受注確率を取得
	var closeprobability = oppRowData.closeprobability;

	// アイコンのWebリソース名 new_Error,new_Warning,new_OKの3種類を登録済み
	var imgName = "";
	
	// アイコンにマウスポインタをオーバーした際のTooltipメッセージ
	var tooltip = "";
	
	// 受注確率に応じてアイコンを表示
	switch(true)
	{
		case closeprobability <= 50:
			imgName = "new_Error";
			tooltip = "危ないよ！";
			break;

		case closeprobability <= 70:
			imgName = "new_Warning";
			tooltip = "まあまあかも！";
			break;

		case closeprobability <= 100:
			imgName = "new_OK";
			tooltip = "いいね！";
			break;
		
		default:
			imgName = "new_OK";
			tooltip = "いいね！";
			break;
	}
	
	// 配列で1つ目にアイコン、2つ目にTooltipメッセージを返す
	var result = [imgName, tooltip];
	return result;
}