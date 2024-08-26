
import { test, expect } from "@playwright/experimental-ct-react";
import App377 from "../example/App377.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App377 />);
  await expect(component).toContainText("Learn React");
});
