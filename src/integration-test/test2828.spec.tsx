
import { test, expect } from "@playwright/experimental-ct-react";
import App2828 from "../example/App2828.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2828 />);
  await expect(component).toContainText("Learn React");
});
