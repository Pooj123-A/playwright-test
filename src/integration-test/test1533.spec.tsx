
import { test, expect } from "@playwright/experimental-ct-react";
import App1533 from "../example/App1533.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1533 />);
  await expect(component).toContainText("Learn React");
});
