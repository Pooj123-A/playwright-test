
import { test, expect } from "@playwright/experimental-ct-react";
import App956 from "../example/App956.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App956 />);
  await expect(component).toContainText("Learn React");
});
