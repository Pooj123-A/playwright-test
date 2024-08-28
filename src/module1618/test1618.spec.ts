
import { test, expect } from "@playwright/experimental-ct-react";
import App1618 from "./App1618.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1618 />);
  await expect(component).toContainText("Learn React");
});
