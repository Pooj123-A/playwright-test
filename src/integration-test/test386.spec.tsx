
import { test, expect } from "@playwright/experimental-ct-react";
import App386 from "../example/App386.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App386 />);
  await expect(component).toContainText("Learn React");
});
