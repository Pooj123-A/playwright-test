
import { test, expect } from "@playwright/experimental-ct-react";
import App976 from "../example/App976.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App976 />);
  await expect(component).toContainText("Learn React");
});
