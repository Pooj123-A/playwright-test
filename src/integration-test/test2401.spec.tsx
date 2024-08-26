
import { test, expect } from "@playwright/experimental-ct-react";
import App2401 from "../example/App2401.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2401 />);
  await expect(component).toContainText("Learn React");
});
