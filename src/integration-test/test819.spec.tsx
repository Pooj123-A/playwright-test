
import { test, expect } from "@playwright/experimental-ct-react";
import App819 from "../example/App819.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App819 />);
  await expect(component).toContainText("Learn React");
});
