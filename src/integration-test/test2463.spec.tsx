
import { test, expect } from "@playwright/experimental-ct-react";
import App2463 from "../example/App2463.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2463 />);
  await expect(component).toContainText("Learn React");
});
