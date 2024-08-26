
import { test, expect } from "@playwright/experimental-ct-react";
import App2540 from "../example/App2540.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2540 />);
  await expect(component).toContainText("Learn React");
});
