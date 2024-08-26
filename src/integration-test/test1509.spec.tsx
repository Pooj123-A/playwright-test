
import { test, expect } from "@playwright/experimental-ct-react";
import App1509 from "../example/App1509.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1509 />);
  await expect(component).toContainText("Learn React");
});
