
import { test, expect } from "@playwright/experimental-ct-react";
import App93 from "../example/App93.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App93 />);
  await expect(component).toContainText("Learn React");
});
