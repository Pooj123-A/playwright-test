
import { test, expect } from "@playwright/experimental-ct-react";
import App2560 from "../example/App2560.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2560 />);
  await expect(component).toContainText("Learn React");
});
