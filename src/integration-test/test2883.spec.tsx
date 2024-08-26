
import { test, expect } from "@playwright/experimental-ct-react";
import App2883 from "../example/App2883.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2883 />);
  await expect(component).toContainText("Learn React");
});
