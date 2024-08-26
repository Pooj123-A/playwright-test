
import { test, expect } from "@playwright/experimental-ct-react";
import App2685 from "../example/App2685.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2685 />);
  await expect(component).toContainText("Learn React");
});
