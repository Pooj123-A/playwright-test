
import { test, expect } from "@playwright/experimental-ct-react";
import App1977 from "../example/App1977.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1977 />);
  await expect(component).toContainText("Learn React");
});
