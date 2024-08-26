
import { test, expect } from "@playwright/experimental-ct-react";
import App1464 from "../example/App1464.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1464 />);
  await expect(component).toContainText("Learn React");
});
