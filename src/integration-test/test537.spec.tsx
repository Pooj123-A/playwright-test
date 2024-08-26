
import { test, expect } from "@playwright/experimental-ct-react";
import App537 from "../example/App537.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App537 />);
  await expect(component).toContainText("Learn React");
});
