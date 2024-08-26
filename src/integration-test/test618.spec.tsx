
import { test, expect } from "@playwright/experimental-ct-react";
import App618 from "../example/App618.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App618 />);
  await expect(component).toContainText("Learn React");
});
