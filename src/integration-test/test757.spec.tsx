
import { test, expect } from "@playwright/experimental-ct-react";
import App757 from "../example/App757.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App757 />);
  await expect(component).toContainText("Learn React");
});
