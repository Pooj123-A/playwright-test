
import { test, expect } from "@playwright/experimental-ct-react";
import App895 from "../example/App895.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App895 />);
  await expect(component).toContainText("Learn React");
});
