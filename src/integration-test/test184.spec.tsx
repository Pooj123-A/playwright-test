
import { test, expect } from "@playwright/experimental-ct-react";
import App184 from "../example/App184.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App184 />);
  await expect(component).toContainText("Learn React");
});
