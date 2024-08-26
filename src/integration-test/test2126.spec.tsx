
import { test, expect } from "@playwright/experimental-ct-react";
import App2126 from "../example/App2126.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2126 />);
  await expect(component).toContainText("Learn React");
});
