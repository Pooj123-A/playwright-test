
import { test, expect } from "@playwright/experimental-ct-react";
import App304 from "../example/App304.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App304 />);
  await expect(component).toContainText("Learn React");
});
