
import { test, expect } from "@playwright/experimental-ct-react";
import App972 from "../example/App972.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App972 />);
  await expect(component).toContainText("Learn React");
});
