
import { test, expect } from "@playwright/experimental-ct-react";
import App721 from "./App721.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App721 />);
  await expect(component).toContainText("Learn React");
});
