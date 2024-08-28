
import { test, expect } from "@playwright/experimental-ct-react";
import App2618 from "./App2618.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2618 />);
  await expect(component).toContainText("Learn React");
});
