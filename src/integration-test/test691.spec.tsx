
import { test, expect } from "@playwright/experimental-ct-react";
import App691 from "../example/App691.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App691 />);
  await expect(component).toContainText("Learn React");
});
