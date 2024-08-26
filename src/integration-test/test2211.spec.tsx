
import { test, expect } from "@playwright/experimental-ct-react";
import App2211 from "../example/App2211.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2211 />);
  await expect(component).toContainText("Learn React");
});
