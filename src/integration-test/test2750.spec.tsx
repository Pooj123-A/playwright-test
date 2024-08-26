
import { test, expect } from "@playwright/experimental-ct-react";
import App2750 from "../example/App2750.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2750 />);
  await expect(component).toContainText("Learn React");
});
