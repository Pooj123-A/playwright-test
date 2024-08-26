
import { test, expect } from "@playwright/experimental-ct-react";
import App445 from "../example/App445.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App445 />);
  await expect(component).toContainText("Learn React");
});
