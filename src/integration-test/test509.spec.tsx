
import { test, expect } from "@playwright/experimental-ct-react";
import App509 from "../example/App509.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App509 />);
  await expect(component).toContainText("Learn React");
});
