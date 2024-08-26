
import { test, expect } from "@playwright/experimental-ct-react";
import App164 from "../example/App164.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App164 />);
  await expect(component).toContainText("Learn React");
});
