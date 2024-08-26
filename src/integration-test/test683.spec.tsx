
import { test, expect } from "@playwright/experimental-ct-react";
import App683 from "../example/App683.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App683 />);
  await expect(component).toContainText("Learn React");
});
