
import { test, expect } from "@playwright/experimental-ct-react";
import App2674 from "../example/App2674.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2674 />);
  await expect(component).toContainText("Learn React");
});
