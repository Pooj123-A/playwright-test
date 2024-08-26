
import { test, expect } from "@playwright/experimental-ct-react";
import App196 from "../example/App196.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App196 />);
  await expect(component).toContainText("Learn React");
});
