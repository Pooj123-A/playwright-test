
import { test, expect } from "@playwright/experimental-ct-react";
import App358 from "../example/App358.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App358 />);
  await expect(component).toContainText("Learn React");
});
