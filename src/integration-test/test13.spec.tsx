
import { test, expect } from "@playwright/experimental-ct-react";
import App13 from "../example/App13.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App13 />);
  await expect(component).toContainText("Learn React");
});
