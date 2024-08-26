
import { test, expect } from "@playwright/experimental-ct-react";
import App2432 from "../example/App2432.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2432 />);
  await expect(component).toContainText("Learn React");
});
