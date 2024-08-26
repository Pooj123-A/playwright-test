
import { test, expect } from "@playwright/experimental-ct-react";
import App2886 from "../example/App2886.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2886 />);
  await expect(component).toContainText("Learn React");
});
